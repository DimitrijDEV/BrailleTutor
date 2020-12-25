import { IWord } from "@/interfaces";

export class Word implements IWord{
    character: string;
    braille: boolean[];

    constructor(character: string, braille: boolean[]){
        this.character = character;
        this.braille = braille;
    }

}