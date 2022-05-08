let apply = (action, ...argus) => {
    require(`./${action}`)(...argus)
}

export default apply