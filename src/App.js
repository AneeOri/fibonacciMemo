import "./styles.css";

export default function App() {
  const results = {};

  function fib(n) {
    if (n <= 1) return n;

    if (n in results) {
      return results[n];
    } else {
      results[n] = fib(n - 2) + fib(n - 1);
    }
    return results[n];
  }

  console.log(fib(100));

  var cache = [];
  var fibonacci = function (n) {
    if (n == 0 || n == 1) return n;
    if (cache[n]) return cache[n];
    return (cache[n] = fibonacci(n - 1) + fibonacci(n - 2));
  };

  function fibonacci2(n, c) {
    c = c || [0, 1, 1];
    return n in c
      ? c[n]
      : c[c.push(fibonacci(n - 1, c) + fibonacci(n - 2, c)) - 1];
  }

  const fibonacci44 = ((arr) => (n) =>
    arr[n] !== undefined
      ? arr[n]
      : (arr[n] = fibonacci(n - 1) + fibonacci(n - 2)))([0, 1]);

  var cache = [0, 1];
  var fibonacci5 = (n) =>
    cache[n] !== undefined
      ? cache[n]
      : (cache[n] = fibonacci5(n - 1) + fibonacci5(n - 2));

  return (
    <div className="App">
      <input />
    </div>
  );
}
