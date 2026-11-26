function processData(data: unknown): string {
  if (typeof data === "string") {
    return data.toUpperCase();
  }
  return "Not a string";
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"


// Error ที่เจอคือ 'data' is of type 'unknown'
// เนื่องจากพารามิเตอร์ data มี Type เป็น unknown ทำให้ TypeScript ยังไม่ทราบชนิดข้อมูลที่แน่นอน 
// จึงไม่อนุญาตให้เรียกใช้ Method .toUpperCase() ได้โดยตรงจนกว่าจะตรวจสอบชนิดข้อมูลด้วย typeof ก่อน