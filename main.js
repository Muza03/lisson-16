async function TaskManager(id) {
	try {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/todos/${id}`,
			{
				method: 'DELETE',
			}
		)

		const data = await response.json()

		console.log(data)
	} catch (error) {
		console.error(error)
	}
}

TaskManager()
