export const goToList = (history) => {
    history.push("/")
}

export const goToDetails = (history, id) => {
    history.push(`/detalhes-personagens/${id}`)
}

