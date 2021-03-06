# QC Questions on Microservices
[microservices.io](https://microservices.io)


 - Describe the microservice architecture pattern.
   - In contrast to a monolithic application MSA splits the different functionality into many small independent services that run on their own, and may even have their own individual database.
 - How are microservices different than SOA?
   - In MSA the services are usually smaller and more specific, and there are many more of them. 
   - In SOA traditionally there is still only one datasource, in MSA each service may have it's own datasource. 
   - SOA was envisioned split modules into separate services, MSA was envisioned to further split into independent services the smallest logical units.
   - MSA is considered an extension of SOA. SOA made applications more modular, MSA continued this trend.
 - What are some advantages to using microservices?
   - Fault tolerance - is a service goes down, the other services stay up and can resume functionality when the service comes back.
   - Scalability - particularly horizontal scalability - the nature of MSA makes it very easy to scale up and down as needed.
   - Delegation - Efforts can be split into multiple dev teams working on individual services.
   - Refactorability - Making significant changes to a service doesn't impact the other services.
   - Tech Independence - We can choose the perfect technologies for a given service, each servie having it's own frameworks, libraries, and even languages.
 - What are some disadvantages to using microservices?
   - Complexity - design of good MSA solutions is far more complex than traditional monoliths.
   - Cost - With greater complexity comes greater cost: human resources, knowlege, time, money, all costs go up.
 - What is a "monolithic" application?
   - A application designed and deployed as a single service (or maybe two in client-server), this was the traditional way of writing solutions.
 - Can a Java microservice communicate with a Node.js microservice? Why or why not? 
   - Yes. Microservies can be designed with completely different techs and environments, and communicate with a common protocol (Like JSON or XML).
 - How would you approach deconstructing a monolith into microservices?
   - Identify logical units that can operate independently, like layers, modules, classes, and separate these into independent services.
   - Identify which data goes with which services and split the datasource into multiple datasources.
   - Establish some protocols for communication between services.
   - Splitting the application apart introduces new requirements for things like: gateway, configuration, load balancing, session management, monitoring, and detection. Se we need solutions to these new problems as well. 
 - What design patterns are commonly used in microservices?
   - circuit breaker, API Gateway (AKA intelligent routing), database-per-microservice, asynchronous messaging, service discovery
 - What implementation of API Gateway have you used?
   - Netflix's Zuul gateway service
 - What implementation of Service Discovery have you used?
   - Netflix's Eureka service registry
 - What implementation of Circuit Breaker are you familiar with?
   - Netflix's Hystrix library
 - Who made tools like Eureka, Zuul, and Hystrix?
   - These were made by Netflix
 - Where did the dependencies Eureka, Zuul, and Hystrix come from?
   - These dependencies can be sourced from Spring Cloud Netflix, a project that provides Netflix Open Source Software integrations for Spring Boot apps.
 - What is the purpose of an API gateway and how does Zuul perform this? 
   - API gateway is a single service for the UI to connect to that will invoke necessary services and aggregate the results. Zuul applies filters to requests based on URL pattern which invoke our code as needed. 
 - What is service discovery and how does Eureka do this? 
   - service discovery allows services to discover and connect to each other. Eureka allows services to register themselves with a POST request and keep it's registration active by refreshing with a PUT request every 30 seconds. While an instance of a service is registered it can be disocvered by other services querying Eureka for details.
 - What is the circuit breaker pattern and how does Hystrix implement it? What are the different circuit states? 
   - A circuit breaker wraps a function call with a monitor and will change it's behavior if it detects a problem with a service. Hystrix watches for failing calls to a method, and if failures build up to a threshold then Hystrix opens the circuit so that subsequent calls automatically fail. While the circuit is open, Hystrix redirects calls to a specified fallback method.
   - Closed State - When service is up and running, the circuit breaker remains in the closed state and all calls pass through to the services.
   - Open State - When the number of failures exceeds a predetermined threshold the breaker trips, and it goes into the Open state. In the OPEN state the circuit breaker returns an error for all calls to the service without making the calls to the Supplier Microservice.
   - Half-Open State - The circuit breaker makes a trial call to the failed service periodically to check if it has recovered. If the call to the service times out, the circuit breaker remains in the Open state. If the call returns successfully, then the circuit switches to the closed state.
 - How would you configure a Eureka server? (describe dependencies, .yml file, and annotations)
   - fetch the dependency from maven or some other location. Use the spring-cloud-starter-netflix-eureka-server dependency.
   - set the properties in application.properties or application.yml file, including the server port and other behaviors.
   - add the @EnableEurekaServer annotation to the SpringBootApplication class.
 - How would you configure a Eureka client? (describe dependencies, .yml file, and annotations)
   - fetch the dependency from maven or some other location. Use the spring-cloud-config-server dependency.
   - set the properties in application.properties or application.yml file, including the eureka service URL.
   - add the @EnableDiscoveryClient annotation to the SpringBootApplication class.
 - How would you configure a config server? (describe dependencies, .yml file, and annotations)
   - fetch the dependency from maven or some other location. Use the spring-cloud-starter-netflix-eureka-server dependency.
   - set up configurations in a git repository, creating .properties files for the different services to be configured
   - set the properties in application.properties or application.yml file, including port and location of the configurations (git repo)
   - add the @EnableConfigServer annotation to the SpringBootApplication class.
 - How would you configure a Zuul reverse proxy? (describe dependencies, .yml file, and annotations)
   - fetch the dependency from maven or some other location. Use the spring-cloud-starter-zuul dependency.
   - set the properties in application.properties or application.yml file, including the port and any statically defined routes.
   - add the @EnableZuulProxy annotation to the SpringBootApplication class.
 - Describe how you would configure Zuul routes.
   - Zuul routes can be configured in the zuul server's configuration (.properties or .yml). They need two parts: path and URL
   - `zuul.routes.someservice.path=resource/**` and `zuul.routes.someservice.url=http://localhost:54321/`
 - What are Zuul filters? Name some different kinds.
   - Zuul filters are used to intercept a request and hook into our code. Pre-filters are executed before the request is routed, post-filters after the request is routed, route-filters used to route the request, and error-filters are used to act if an error occurs.
 - Explain how persistence works in a distributed architecture.
   - A common design pattern for persistence in MSA is database-per-service, where each service has it's own database, rather than having many services be strongly coupled with a monolithic persistence service.
 - What is a heartbeat in context of Spring Cloud microservices?
   - A heartbeat is used to monitor an instance of a service. In a spring cloud microservice app using eureka a heartbeat is sent from some service to the discovery service periodically in order to keep it's registration active.
 - If using centralized configuration, what is a recommended order to spin up microservices locally?
   1. Discovery service - launched first so that config service can register itself
   2. Config service - launched before other services require their configs
   3. All other services which will configure and register themselves
   4. Gateway - launch gateway last, opening the door for client requests.
 - How can we establish synchronous communication between our microservices?
   - HTTP is synchronous, a client or service can consume another service's endpoints to communicate synchronously, sending HTTP requests and receiving responses.
 - How can we establish asynchronous communication between our microservices?
   - We can use advanced messaging design patterns, for instance Message Queues such as RabbitMQ, Amazon SQS, or Apache Kafka.
     - point-to-point - senders and receivers exchange messages through a queue. Senders publish to a queue and receivers consume messages from a queue.
     - pub/sub - senders can broadcast messages to more than one recipient. Senders broadcast to a topic, and receivers subscribe to that topic to receive broadcasts.
 - What is FeignClient?
   - A library for creating REST API clients in a declarative way. Rather than coding the client normally, you can use the spring web annotations you would normally use in a @Controller bean but on the client side.
