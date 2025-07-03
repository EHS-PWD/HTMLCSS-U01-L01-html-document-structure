const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const filePath = path.resolve(__dirname, "../student-code/index.html");
const html = fs.readFileSync(filePath, "utf8");

let dom;
let document;

beforeAll(() => {
  dom = new JSDOM(html);
  document = dom.window.document;
});

describe("Unit 01 - HTML Document Structure", () => {
  test("includes a DOCTYPE declaration", () => {
    const doctype = dom.window.document.doctype;
    expect(doctype).not.toBeNull();
    expect(doctype.name).toBe("html");
  });

  test("includes the <html> element", () => {
    const htmlTag = document.documentElement;
    expect(htmlTag).not.toBeNull();
    expect(htmlTag.tagName.toLowerCase()).toBe("html");
  });

  test("includes a <head> section with a <title>", () => {
    const head = document.querySelector("head");
    const title = head ? head.querySelector("title") : null;

    expect(head).not.toBeNull();
    expect(title).not.toBeNull();
    expect(title.textContent).toBe("My First Web Page");
  });

  test("includes a <body> section", () => {
    const body = document.querySelector("body");
    expect(body).not.toBeNull();
  });

  test("includes an <h1> heading with correct text", () => {
    const h1 = document.querySelector("h1");
    expect(h1).not.toBeNull();
    expect(h1.textContent).toBe("Welcome to My Web Page");
  });

  test("includes a <p> with a description about the web page", () => {
    const p = document.querySelector("p");
    expect(p).not.toBeNull();
    expect(p.textContent).toMatch(/simple web page created to demonstrate/i);
  });
});
