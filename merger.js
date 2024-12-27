const {Automizer} = require('pptx-automizer');
const fs = require("fs");
const automizer = new Automizer({
    // todo : change for an actual directory
    templateDir: '',

    // todo : change for an actual directory
    templateFallbackDir: '',

    // not needed
    outputDir: '',

    useCreationIds: false,

    autoImportSlideMasters: false,

    removeExistingSlides: false,

    cleanup: false
});

function buildPresentation(templates) {
    let presentation = automizer
        .loadRoot(templates[0])
    if (templates.length > 1) {
        for (let i = 1; i < templates.length; i++) {
            presentation.load(templates[i], `template-${i}`)
        }
    }
    return presentation;
}

async function addSlides (files, pres){
    for (let i = 1; i < files.length; i++) {
        await pres
            .getTemplate(`template-${i}`)
            .getAllSlideNumbers()
            .then(function (result) {
                for (let j = 0; j < result.length; j++) {
                    pres
                        .addSlide(`template-${i}`, result[j])
                }
            });
    }
}

async function execute() {
    const files = ["1.pptx","2.pptx"]

    let pres = buildPresentation(files)

    // todo : change the path
    const outputFile = './test.pptx'
    addSlides(files,pres).then(async () => {
        const result = await pres.getJSZip();
        const res = await result.generateAsync({type: 'nodebuffer'})
        await fs.writeFileSync(outputFile, res)
        return res;
    });
}

execute().then();