import { BaseEntity } from './BaseEntity';

export class Block extends BaseEntity
{
    constructor(public xpos: number,
                public ypos: number,
                public height: number,
                public width: number)
    {
        super(xpos, ypos, height, width);
    }
}