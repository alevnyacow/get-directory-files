import { readdirSync, readFileSync } from "fs";
import { join } from "path";

export type FilesData = { [fileName: string]: string };

export function readDirectoryFiles(directoryPath: string) {
    const directoryContent = readdirSync(directoryPath, {
        withFileTypes: true
    });
    const fileNames = directoryContent
        .filter((x) => x.isFile())
        .map((x) => x.name);
    return fileNames.reduce((accumulator, currentName) => {
        return {
            ...accumulator,
            [currentName]: readFileSync(
                join(directoryPath, currentName)
            ).toString()
        };
    }, {} as FilesData);
}
