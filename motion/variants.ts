export const variantsButton = {
    Hover: { scale: 1.1 },
    Tap: {
        scale: 0.9, transition: {
            duration: 0.4
        }
    }
}

export const variantsCard = {
    Hover: { scale: 1.05 },
    Tap: {
        scale: 0.9, transition: {
            duration: 0.4
        }
    }
}

export const grid = {
    visible: {
      opacity: 1, y: 0,
      transition: {
        duration: 0.4
      }
    },
    hidden: { opacity: 0, y: -2000 },
    exit: {
      opacity: 1, y: 2000,
      transition: {
        duration: 0.4
      }
    }
  }

  export const head = {
    visible: {
        opacity: 1, y: 0,
        transition: {
            duration: 0.3
        }
    },
    hidden: { opacity: 0, y: -600 },
    exit:{
        opacity: 1, x: 2000,
        transition: {
            duration: 0.3
        }
    }
}

export const animationModal = {
    visible: {
        opacity: 1,
        transition: {
            duration: 0.3
        }
    },
    hidden: { opacity: 0 },
}