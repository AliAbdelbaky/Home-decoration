new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    navigationTooltips: ['Home Decorationss', 'Different Styles', 'Author'],
    onLeave: (origin, destination, direction) => {
        const section = destination.item,
            title = section.querySelector('h1'),
            tl = new TimelineMax({ delay: 0.5 });
        tl.fromTo(title, 0.5, { y: '50', opacity: 0 }, { y: '0', opacity: 1 });
        if (destination.index === 1) {
            const chairs = document.querySelectorAll('.chair'),
                description = document.querySelector('.description');
            tl
                .fromTo(chairs, 0.7, { x: '100%' }, { x: '-5%' })
                .fromTo(description, 0.7, { y: '50', opacity: 0 }, { y: '0', opacity: 1 })
                .fromTo(chairs[0], 1, { opacity: 1 }, { opacity: 1 })
                .fromTo(chairs[1], 1, { opacity: 0 }, { opacity: 1 })
                .fromTo(chairs[2], 1, { opacity: 0 }, { opacity: 1 })
        };
        if (destination.index === 2) {
            const Author = document.querySelector('.author');
            tl
                .fromTo(Author, 0.7, { x: '-100%', opacity: 0 }, { x: '-50%', opacity: 1 })
        }
    },
    controlArrows: true,
})