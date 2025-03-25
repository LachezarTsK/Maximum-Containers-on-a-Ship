
class Solution {
    
    fun maxContainers(containerSlots: Int, weightPerContainer: Int, maxWeight: Int): Int {
        val maxContainerCapacity = containerSlots * containerSlots
        val weightForMaxContainerCapacity = maxContainerCapacity * weightPerContainer

        return if (weightForMaxContainerCapacity > maxWeight)
                  (maxWeight / weightPerContainer)
               else maxContainerCapacity
    }
}
