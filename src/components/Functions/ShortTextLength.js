export const ShortenTextLength = (filename) => {
    let filetxt = filename;
     const filenameLen = filetxt?.length;
     if (filenameLen > 10) {
       const filenameShort = filename?.substring(0, 10);
       return `${filenameShort}...`;
     } else {
       return filename;
     }
}