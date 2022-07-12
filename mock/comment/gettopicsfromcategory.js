module.exports = (request) => {
	return {
		data: [
			{
				id: 1,
				content: 'This is a test comment',
				account: {
					username: 'test'
				}
			},
			{
				id: 2,
				content: 'This is a test comment',
				account: {
					username: 'test'
				}
			},
			{
				id: 3,
				content: 'This is a test comment',
				account: {
					username: 'test'
				}
			}
		],
		errorCode: 0,
		success: true,
		message: "Get comments successfully",
		totalRecord: 3,
		totalPage: 1,
		pageNumber: 1,
		pageSize: 10,
		hasNextPage: false,
		hasPreviousPage: false
	}
}