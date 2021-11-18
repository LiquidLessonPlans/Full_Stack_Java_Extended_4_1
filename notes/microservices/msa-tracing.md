# Distributed Tracing

One of the challenges in a microservice architecture is the ability to debug issues. A user action might trigger a chain of downstream microservice calls. IT and DevOps teams have to use distributed tracing to monitor applications and trace the logs related to a particular user action across microservices, which can be useful for troubleshooting any issue.

Distributed Tracing tells the story of an end-to-end request, including everything from mobile performance to database health. 

Distributed tracing provides a solution for describing and analyzing cross-process transactions. Some of the use cases of distributed tracing as described in [Google’s Dapper paper](https://research.google/pubs/pub36356/) include anomaly detection, diagnosing steady state problems, distributed profiling, resource attribution, and workload modeling of microservices.

A **trace** begins when a user sends an initial request to an entry point of our application. As requests travel between services, each segment is recorded as a **span**, which represents time spent in services or resources of those services.  Every span is tagged with a unique ID, a distributed tracing engine can identify and analyze all of the data correlated to the original request. All the spans of a request are combined into a *single distributed trace* to give us a picture of an entire request. 

Some distributed tracing tools are:

*  [Zipkin](https://zipkin.io/) - Zipkin is a distributed tracing system. It is an open source project that provides mechanisms for sending, receiving, storing, and visualizing traces. Also allows us to correlate activity between servers and get a much clearer picture of exactly what is happening in our services.

* [Jaeger](https://www.jaegertracing.io/) -  Jaeger uses distributed tracing to follow the path of a request through different microservices. Jaeger includes tools to monitor distributed transactions, optimize performance and latency, and perform [root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis) (RCA), a method of problem solving. 

* [Prometheus](https://prometheus.io/) - Prometheus is a open-source software system used for event monitoring and alerting.

* [OpenTelemetry](https://opentelemetry.io/) - [OpenTracing](https://opentracing.io/)and [OpenCensus](https://opencensus.io/) have merged to form [OpenTelemetry](https://opentelemetry.io/). OpenTracing offers a vendor-neutral API for adding tracing to applications and delivering that data into distributed tracing systems. OpenCensus allow us to collect application metrics and distributed traces. OpenTelemetry provides a single set of APIs, libraries, agents, and collector services to capture distributed traces and metrics from your application. You can analyze them using [Prometheus](https://prometheus.io/), [Jaeger](https://www.jaegertracing.io), and other [observability](https://lightstep.com/observability/) tools.

[Spring Cloud Sleuth](https://cloud.spring.io/spring-cloud-sleuth/reference/html/) provides Spring Boot auto-configuration for distributed tracing. It is used to generate and attach the trace ID, span ID to the logs so that these can then be used by tools like [Zipkin]((https://zipkin.io/)) and [ELK stack](https://aws.amazon.com/elasticsearch-service/the-elk-stack/) for storage and analysis.


## References

* [Distributed Tracing: A Complete Guide](https://lightstep.com/distributed-tracing/)
* [Distributed Tracing in Micoservices using Zipkin, Sleuth and ELK Stack.](https://medium.com/swlh/distributed-tracing-in-micoservices-using-spring-zipkin-sleuth-and-elk-stack-5665c5fbecf#:~:text=After%20the%20Orchestrator%20Service%20receives,other%20called%20a%20span%20ID.)
