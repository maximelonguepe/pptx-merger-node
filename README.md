# PPTX Merger in Node.js

## Why This Snippet Exists
Finding an API-independent and user-friendly solution for merging PPTX files can be challenging. I wanted to avoid relying on external services, so I sought a library capable of merging PowerPoint files. While the chosen library wasn't specifically designed for this purpose, its documentation demonstrated that merging is possible.

## Limitations
While effective, the library has several constraints that need to be addressed for successful merges:

1. **Slide Masters**:
    - The library struggles with handling multiple slide masters. Ensure your presentation has a single slide master; otherwise, errors may occur when opening the merged file.
    - Slides with varying masters (e.g., one with a title and subtitle and another with only a title) should be split into separate presentations.

2. **Background Images**:
    - Background images may not merge correctly unless embedded directly into the slide-master put it in the background of each slide.

3. **Unnecessary Slide Masters**:
    - Remove all unused or extra slide masters from the files before merging. If more than two slide masters exist, consider splitting the files further.

4. **Comments and Restricted Slides**:
    - Slides with comments or restrictions can corrupt the merged file. Use clean versions without comments or restrictions.

## Recommendations
To ensure successful merging, prepare your presentations by:

- Using a single slide master.
- Embedding background images directly into slides.
- Removing unnecessary slide masters.
- Cleaning slides of comments or restrictions.

By following these steps, you can avoid errors and achieve a seamless merge of your PowerPoint files.
