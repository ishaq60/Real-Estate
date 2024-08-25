export const fadeIn = (direction = 'up', delay = 0) => {
    const initialPosition = {
        x: 0,
        y: 0,
    };

    if (direction === 'up') initialPosition.y = 40;
    if (direction === 'down') initialPosition.y = -40;
    if (direction === 'left') initialPosition.x = 40;
    if (direction === 'right') initialPosition.x = -40;

    return {
        hidden: {
            ...initialPosition,
            opacity: 0, // Add opacity to hidden state
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};
