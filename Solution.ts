
function maxContainers(containerSlots: number, weightPerContainer: number, maxWeight: number): number {
    const maxContainerCapacity = containerSlots * containerSlots;
    const weightForMaxContainerCapacity = maxContainerCapacity * weightPerContainer;

    return (weightForMaxContainerCapacity > maxWeight)
            ? Math.floor(maxWeight / weightPerContainer)
            : maxContainerCapacity;
};
