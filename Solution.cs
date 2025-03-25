
using System;

public class Solution
{
    public int MaxContainers(int containerSlots, int weightPerContainer, int maxWeight)
    {
        int maxContainerCapacity = containerSlots * containerSlots;
        int weightForMaxContainerCapacity = maxContainerCapacity * weightPerContainer;

        return (weightForMaxContainerCapacity > maxWeight)
                ? (maxWeight / weightPerContainer)
                : maxContainerCapacity;
    }
}
