
package main

func maxContainers(containerSlots int, weightPerContainer int, maxWeight int) int {
    maxContainerCapacity := containerSlots * containerSlots
    weightForMaxContainerCapacity := maxContainerCapacity * weightPerContainer

    if weightForMaxContainerCapacity > maxWeight {
        return maxWeight / weightPerContainer
    }
    return maxContainerCapacity
}
