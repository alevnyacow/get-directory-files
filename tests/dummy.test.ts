import { join } from "path";
import { readDirectoryFiles } from "../sources";

test("txt files", () => {
    const directoryPath = join(__dirname, "txt-files");
    const testDirc = readDirectoryFiles(directoryPath);
    expect(testDirc).toEqual({
        ["a.txt"]: "hello",
        ["b.txt"]: "world"
    });
});
