import { Component } from '@angular/core';
import { CodeBlock } from '../../../components/code-block/code-block';

@Component({
  selector: 'app-rust-async',
  imports: [CodeBlock],
  templateUrl: './rust-async.html',
  styleUrl: './rust-async.css',
})
export class RustAsync {
  codeExOne = `
  use std::thread;  // Import the thread module from std.

  fn main() {  // Main function, synchronous.
      let handle = thread::spawn(|| {  // Spawn a new thread; the closure runs in parallel.
          let mut sum = 0;  // Local variable in the thread.
          for i in 1..=1000000 { sum += i; }  // CPU-bound loop; simulates heavy computation.
          sum  // Return the result from the closure.
      });

      // Main thread continues immediately without waiting.
      println!("Main thread doing other work...");

      let result = handle.join().unwrap();  // Wait for the thread to finish and get its result.
      println!("Thread result: {}", result);  // Print the computed sum.
  }
  `;

  codeExTwo = `
  // Pseudocode without async/await
  fetch_data().then(|data| {
      process_data(data).then(|result| {
          save_result(result).then(|_| println!("Done"));
      });
  });
  `;

  codeExThree = `
  use tokio::runtime::Runtime;  // Import Runtime for manual executor control.
  use tokio::time::{sleep, Duration};  // For async sleep.

  async fn delayed_hello() {  // Async function returning a future.
      sleep(Duration::from_secs(1)).await;  // Yield until sleep completes.
      println!("Hello after delay!");  // Run after await.
  }

  fn main() {  // Synchronous main.
      let rt = Runtime::new().unwrap();  // Create a new Tokio runtime (executor).
      rt.block_on(async {  // Block main thread while running the async block.
          delayed_hello().await;  // Schedule and await the future.
      });
  }
  `;

  codeExFour = `
  [package]
  edition = "2024"

  [dependencies]
  tokio = { version = "1.47.1", features = ["full"] }
  `;

  codeExFive = `
  // Synchronous: Blocks while waiting
  fn fetch_data() -> String {  // Sync function.
      // Simulate a slow network call (in real sync code, this could be std::fs::read for file I/O)
      std::thread::sleep(std::time::Duration::from_secs(2));  // Blocks the thread for 2 seconds.
      "Data fetched!".to_string()  // Return after blocking.
  }

  fn main() {  // Sync main.
      let data = fetch_data();  // Waits 2 seconds here, blocking entire program.
      println!("{}", data);  // Prints after wait.
  }
  `;

  codeExSix = `
  use tokio::time::{sleep, Duration};  // Import async sleep.

  // Async function: Returns a Future
  async fn fetch_data_async() -> String {  // async fn keyword.
      // Simulate async wait (non-blocking)
      sleep(Duration::from_secs(2)).await;  // .await yields to executor; thread free.
      "Data fetched asynchronously!".to_string()  // Runs after future completes.
  }
  `;

  codeExSeven = `
  #[tokio::main]  // This macro turns main into an async runtime entry point.
  async fn main() {  // Now main is async.
      let data = fetch_data_async().await;  // .await in main; non-blocking.
      println!("{}", data);  // Prints after completion.
  }
  `;

  codeExEight = `
  use tokio::time::{sleep, Duration};  // Imports.

  async fn fetch_a() -> String {  // Async fn A.
      sleep(Duration::from_secs(3)).await;  // Wait 3s non-blocking.
      "A done!".to_string()  // Return.
  }

  async fn fetch_b() -> String {  // Async fn B.
      sleep(Duration::from_secs(2)).await;  // Wait 2s.
      "B done!".to_string()
  }

  #[tokio::main]
  async fn main() {
      // Spawn tasks concurrently
      let task_a = tokio::spawn(fetch_a());  // Spawns a new task; runs concurrently.
      let task_b = tokio::spawn(fetch_b());  // Another task.

      // Await both (they run concurrently)
      let result_a = task_a.await.unwrap();  // Wait for task A; unwrap Result.
      let result_b = task_b.await.unwrap();  // Wait for B.

      println!("Results: {} and {}", result_a, result_b);  // Print both.
  }
  `;

  codeExNine = `
  use tokio::{join, time::{sleep, Duration}};

  #[tokio::main]
  async fn main() {
      let task_a = fetch_a();  // No spawn needed for join!.
      let task_b = fetch_b();

      let (result_a, result_b) = join!(task_a, task_b);  // Await multiple futures concurrently.
      println!("Results: {} and {}", result_a, result_b);
  }
  `;

  codeExTen = `
  use tokio::time::{sleep, Duration};

  async fn maybe_fetch() -> Result<String, &'static str> {  // Returns Result.
      // Simulate failure sometimes
      sleep(Duration::from_secs(1)).await;  // Wait.
      Ok("Success!".to_string())  // or Err("Failed!")
  }

  #[tokio::main]
  async fn main() {
      match maybe_fetch().await {  // Await and match.
          Ok(data) => println!("{}", data),
          Err(e) => println!("Error: {}", e),
      }
  }
  `;

  codeExEleven = `
  use reqwest;  // Import HTTP client.

  #[tokio::main]
  async fn main() -> Result<(), Box<dyn std::error::Error>> {  // Main returns Result for error propagation.
      let response = reqwest::get("https://www.example.com")  // Start async GET; returns Future.
          .await?  // Await response; ? propagates error.
          .text()  // Get body as text; another Future.
          .await?;  // Await body.

      println!("Response: {}", response);  // Print.
      Ok(())  // Success.
  }
  `;
  codeExTwelve = `
  use reqwest::Client;
  use futures::future::join_all;

  #[tokio::main]
  async fn main() -> Result<(), Box<dyn std::error::Error>> {
      let client = Client::new(); // Shared client for connection reuse
      let urls = ["https://www.example.com", "https://www.rust-lang.org"];

      // Create futures for concurrent HTTP requests
      let fetches = urls.iter().map(|&url| {
          let client = client.clone(); // Cheap clone via Arc internally
          async move {
              let resp = client.get(url).send().await?; // Send request (starts HTTP GET)
              resp.text().await // Get response body
          }
      });

      // Run all requests concurrently
      let results = join_all(fetches).await;

      // Print results, handling errors
      for (i, res) in results.into_iter().enumerate() {
          match res {
              Ok(body) => println!("Response from {}: {}", urls[i], body),
              Err(e) => eprintln!("Error for {}: {}", urls[i], e),
          }
      }

      Ok(())
  }
  `;

  codeExThirteen = `
  use std::pin::Pin;
  use std::future::Future;

  async fn self_ref() { /* ... */ }

  fn execute(fut: Pin<&mut impl Future>) { /* Poll it */ }
  `;

  codeExFourteen = `
  use futures::stream::{self, StreamExt};  // Import stream utils.

  #[tokio::main]
  async fn main() {
      let mut stream = stream::iter(1..=5);  // Async stream of numbers.
      while let Some(num) = stream.next().await {  // Await next item.
          println!("Num: {}", num);
      }
  }
  `;

  codeExFifteen = `
  #[tokio::main]
  async fn main() {
      let handle = tokio::task::spawn_blocking(|| {  // Run sync code on a blocking thread pool.
          std::thread::sleep(std::time::Duration::from_secs(1));  // Blocking sleep.
          "Computed in thread!"
      });
      let result = handle.await.unwrap();  // Await from async.
      println!("{}", result);
  }
  `;

  codeExSixteen = `
  #[tokio::main]
  async fn main() {
      let closure = async move |input: i32| {
          tokio::time::sleep(std::time::Duration::from_secs(1)).await;
          input * 2
      };
      let result = closure(5).await; // 10 after delay
      println!("Result: {}", result);
  }
  `;

  codeHighlightedTextOne =`async move |x| { ... }`;
  codeHighlightedTextTwo =`reqwest = { version = "0.12.8", features = ["json"] }`;
}
