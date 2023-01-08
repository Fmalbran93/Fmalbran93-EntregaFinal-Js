const showCard = data => {
    data.forEach(product => {
        cardTemplate.querySelector('h5').textContent = product.title
        cardTemplate.querySelector('p').textContent = product.precio
        cardTemplate.querySelector('img').setAttribute('src', product.image)
        cardTemplate.querySelector('.btn').dataset.id = product.id
        cardTemplate.querySelector('.cardContainer').setAttribute('category', product.category)

        const clone = cardTemplate.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}

$(function () {
    $('.filter').on('click', function () {
        let category = $(this).attr('category')
        if (category === 'all') {
            $('.cardContainer').show()
        } else {
            $('.cardContainer').hide()
            $(`.cardContainer[category="${category}"]`).show()
        }
    })
})
