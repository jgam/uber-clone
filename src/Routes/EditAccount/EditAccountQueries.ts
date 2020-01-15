import { gql } from "apollo-boost";

export const EDIT_USER = gql`
	mutation UpdateCurrentUser(
		$firstName: String
		$lastName: String
		$email: String
		$password: String
		$phoneNumber: String
	) {
		UpdateCurrentUser(
			firstName: $firstName
			lastName: $lastName
			email: $email
			password: $password
			phoneNumber: $phoneNumber
		) {
			res
			error
		}
	}
`;
