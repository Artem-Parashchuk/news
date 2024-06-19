export const formatData = data => {
    const options = {
        weekDay: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return data.toLocaleDateString('en-US', options)
}