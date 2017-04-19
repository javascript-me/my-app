export default {
    createLocationStyle (newLeft, newTop) {
        return {left: newLeft + 'px', top: newTop + 'px'}
    },
    getItemIndexFromClassNames (classNames) {
        return Number(classNames.split(' ')[1])
    }
}