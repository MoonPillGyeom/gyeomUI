const path = require("path");

module.exports = [
  // CommonJS 빌드 설정
  {
    name: "cjs",
    mode: "production",
    entry: "./src/index.ts",
    output: {
      filename: "index.cjs.js", // CommonJS 빌드 파일 이름
      path: path.resolve(__dirname, "dist"),
      libraryTarget: "commonjs2",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
  },
  // ESM 빌드 설정
  {
    name: "esm",
    mode: "production",
    entry: "./src/index.ts",
    output: {
      filename: "index.esm.js", // ESM 빌드 파일 이름
      path: path.resolve(__dirname, "dist"),
      library: {
        type: "module",
      },
    },
    experiments: {
      outputModule: true, // ESM 모듈 출력 활성화
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
  },
];
