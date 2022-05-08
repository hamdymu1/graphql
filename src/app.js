import { ApolloServer, gql } from 'apollo-server';

const posts = [
	{
		title: 'First Post',
		id: '1',
	},
	{
		title: 'Second Post',
		id: '2',
	},
];

const typeDefs = gql`
	type Post {
		title: String
		id: String
	}

	type Query {
		posts: [Post]
	}
`;

const resolvers = {
	Query: {
		posts: () => posts,
	},
};

export const server = new ApolloServer({
	typeDefs,
	resolvers,
	csrfPrevention: true,
});
