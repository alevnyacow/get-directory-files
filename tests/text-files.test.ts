import { join } from "path";
import { readDirectoryFiles } from "../sources";

test("txt files", () => {
    const directoryPath = join(__dirname, "txt-files");
    const directoryFilesContent = readDirectoryFiles(directoryPath);
    expect(directoryFilesContent).toEqual({
        ["a.txt"]: "hello",
        ["b.txt"]: "world"
    });
});
