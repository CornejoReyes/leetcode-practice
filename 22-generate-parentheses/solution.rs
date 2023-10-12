impl Solution {
  fn generate_parenthesis(n: i32) -> Vec<String> {
    let mut solution: Vec<String> = Vec::new();
    let permutation = String::new();
    backtrack(&permutation, &mut solution, 0, 0, n);
    solution
  }
  
  fn backtrack(permutation: &String, solution: &mut Vec<String>, left: i32, right: i32, n: i32) {
    if permutation.len() as i32 == n * 2 {
      solution.push(*permutation);
      return;
    }
    if left < n {
      backtrack(&(permutation.to_owned() + "("), solution, left + 1, right, n);
    }
    if right < left {
      backtrack(&(permutation.to_owned() + ")"), solution, left, right + 1, n);
    }
  }
}

fn main() {
  Solution::generate_parenthesis(3);
}