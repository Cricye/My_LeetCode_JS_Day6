// 如何实现‘无缝连播’



// 解答👇

useEffect(() => {
    const requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame
    const cancelAnimationFrame = window.cancelAnimationFrame || webkitCancelAnimationFrame || window.mozCancelAnimationFrame
    const scrollNode = noticeContenEl.current
    const distance = scrollNode.clientWidth / 2
    scrollNode.style.left = scrollNode.style.left || 0 
    window._offset = window._offset || 0
    let requestId = null
    const scrollLeft = () => {
        const speed = 0.5
        window._offset = window._offset + speed
        scrollNode.style.left = -window._offset + 'px'
        //关键行：当距离小于偏移量时，重置偏移量
        if (distance <= window._offset)
            window._offset = 0
            requestId = requestAnimationFrame(scrollLeft)
    }
    requestId = requestAnimationFrame(scrollLeft)
    if (pause)
        cancelAnimationFrame(requestId)
    return () => cancelAnimationFrame(requestId)
}, [notice, pause])
