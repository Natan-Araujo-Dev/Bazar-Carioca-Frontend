export default interface CreateStoreDTO {
	shopkeeperId: number;
	name: string;
	description?: string;
	file?: File | null;
	cellphoneNumber?: string;
	neighborhood?: string;
	street?: string;
	number?: string;

	openingTimeHour?: string;
	openingTimeMinute?: string;

	closingTimeHour?: string;
	closingTimeMinute?: string;
}
