import connectToMongodb from '../../backend/db/connect-to-mongodb';
import User from '../../backend/models/User';

export default async function handler(request, response) {
	await connectToMongodb();
	const {userId} = request.query;

	if (request.method === 'GET') {
		const users = await User.findById(userId);
		return response.status(200).json({data: users});
	}
	if (request.method === 'DELETE') {
		const deletedUser = await User.findByIdAndRemove(userId);
		return response.status(200).json({data: deletedUser});
	}

	return response.status(403).json({message: 'Error: request method not allowed.'});
}
