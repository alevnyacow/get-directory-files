# get-directory-files

Provides file names and content in given directory.

## Usage

```ts
import { readDirectoryFiles } from "@alevnyacow/get-directory-files";

const directoryPath = "some_path";
const result = readDirectoryFiles(directoryPath);

/**
 * result will be an object of following schema:
 * {
 *     ["file_a.txt"]: "content of file_a",
 *     ["file_b.txt"]: "content of file_b"
 * }
 */ 
```

## Exported types

```ts
type FilesData = { [fileName: string]: string };
```

## Package API

```ts
function readDirectoryFiles(directoryPath: string): FilesData;
```