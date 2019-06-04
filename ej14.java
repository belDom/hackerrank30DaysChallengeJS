// Day 14: Scope

class Difference {
    private int[] elements;
    public int maximumDifference;

  // Add your code here
  public Difference(int[] numbers) {
      this.elements = numbers;
  }

  public void computeDifference() {
      int max = 0;

      for (int i = 0; i < this.elements.length - 1; i++) {
          for (int j = i+1; j < this.elements.length; j++) {
              int diff = Math.abs(this.elements[i] - this.elements[j]);
              if (diff > max) {
                  max = diff;
              }
          }
      }

      this.maximumDifference = max;
  }

} // End of Difference class
