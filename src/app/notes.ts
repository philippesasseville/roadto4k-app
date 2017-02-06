export class Notes {
	match_id: number;
	notes: string;

	constructor(match_id: number, notes: string) {
        this.match_id = match_id;
        this.notes = notes;
    }
}