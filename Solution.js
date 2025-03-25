
/**
 * @param {number} containerSlots
 * @param {number} weightPerContainer
 * @param {number} maxWeight
 * @return {number}
 */
var maxContainers = function (containerSlots, weightPerContainer, maxWeight) {
    const maxContainerCapacity = containerSlots * containerSlots;
    const weightForMaxContainerCapacity = maxContainerCapacity * weightPerContainer;

    return (weightForMaxContainerCapacity > maxWeight)
            ? Math.floor(maxWeight / weightPerContainer)
            : maxContainerCapacity;
};
