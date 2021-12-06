import * as z from "zod";

export const clientSchema = z.object({
	clientName: z.string().nonempty({ message: "Please enter a name" }),
	phoneNumber: z
		.number({
			required_error: "Phone number is required",
			invalid_type_error: "Phone number must be a number",
		})
		.gte(10, { message: "Phone number has 10 digits" }),
	yearExperience: z
		.number({
			required_error: "Year in experience is required",
			invalid_type_error: "Year in experience must be a number",
		})
		.nonnegative({ message: "Cannot has negative years in experience" }),
});
