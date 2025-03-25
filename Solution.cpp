
using namespace std;

class Solution {

public:
    int maxContainers(int containerSlots, int weightPerContainer, int maxWeight) const {
        int maxContainerCapacity = containerSlots * containerSlots;
        int weightForMaxContainerCapacity = maxContainerCapacity * weightPerContainer;

        return (weightForMaxContainerCapacity > maxWeight)
                ? (maxWeight / weightPerContainer)
                : maxContainerCapacity;
    }
};
