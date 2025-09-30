import type { Content } from "./Content.js";
import { PlainText } from "./PlainText.js";
import { BoldDecorator } from "./BoldDecorator.js";
import { ItalicDecorator } from "./ItalicDecorator.js";
import { UnderlineDecorator } from "./UnderlineDecorator.js";
import { ColorDecorator } from "./ColorDecorator.js";

let mycontent: Content = new PlainText("Welcome to SOLID Principle and Design Pattern");

mycontent = new BoldDecorator(mycontent);
mycontent = new ItalicDecorator(mycontent);
mycontent = new UnderlineDecorator(mycontent);
mycontent = new ColorDecorator(mycontent, "yellow");

console.log(mycontent.render());
