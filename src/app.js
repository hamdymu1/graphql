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

	type Mutation {
		addPost(title: String!): Post
	}
`;

const resolvers = {
	Query: {
		posts: () => posts,
	},

	Mutation: {
		addPost: (title) => {
			posts.push({ title, id: posts.length + 1 });
		},
	},
};

export const server = new ApolloServer({
	typeDefs,
	resolvers,
	csrfPrevention: true,
});
