export default function getColSpan(numImages) {
    if (numImages === 1) {
        return "12";
    } else if (numImages === 2) {
        return "6";
    } else if (numImages === 3) {
        return "4";
    } else if (numImages >= 4) {
        return "3";
    } else {
        return "4";
    }
}
// export default function getColSpan(numImages) {
//     if (numImages === 1) {
//         return "col-span-12";
//     } else if (numImages === 2) {
//         return "col-span-6";
//     } else if (numImages === 3) {
//         return "col-span-4";
//     } else if (numImages <= 4) {
//         return "col-span-3";
//     } else {
//         return "col-span-4";
//     }
// }
