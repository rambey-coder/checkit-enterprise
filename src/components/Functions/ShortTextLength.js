export const ShortenTextLength = (filename) => {
    let filetxt = filename;
     const filenameLen = filetxt.length;
     if (filenameLen > 26) {
       const filenameShort = filename.substring(0, 26);
       return `${filenameShort}...`;
     } else {
       return filename;
     }
}