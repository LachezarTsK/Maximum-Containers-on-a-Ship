
public class Solution {

    public int maxContainers(int containerSlots, int weightPerContainer, int maxWeight) {
        int maxContainerCapacity = containerSlots * containerSlots;
        int weightForMaxContainerCapacity = maxContainerCapacity * weightPerContainer;

        return (weightForMaxContainerCapacity > maxWeight)
                ? (maxWeight / weightPerContainer)
                : maxContainerCapacity;
    }
}
