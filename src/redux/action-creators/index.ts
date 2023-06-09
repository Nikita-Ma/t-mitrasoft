export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
}

export const getComments = async (id: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    const data = await res.json()
    return data
}

export const getUsersInfo = async (id: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()
    return data
}