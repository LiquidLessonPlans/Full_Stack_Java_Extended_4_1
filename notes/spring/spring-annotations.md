# Spring Annotations

## Spring Config
 - @Configuration
 - @ComponentScan - tells IoC container to configure by scanning for annotated components
 - @Bean - marks a class as a bean (not for component scanning!)
 - @Component - marks a class as a component (a bean) for component scanning. There are also the "stereotype" annotations below:
   - @Repository - marks as a JPA repository bean
   - @Service - marks as a service bean
   - @Controller - marks as a controller (servlet) bean
 - @Autowired - injects dependencies from IoC contrainer automagically
 - @Resource
 - @Qualifier
 - @Required
 - @Inject - Another way to inject dependencies from IoC container
 - @Named

## Spring Data
 - @Query
 - @Repository
 - @Transactional
 - @Param
 - @Id
 - @Transient
 - @CreatedBy, @LastModifiedBy
 - @CreatedDate, @LastModifiedDate
 - @Valid
 - @Min
 - @Max
 - @NotNull
 - @Range

## Spring MVC (Web)
 - @Controller
 - @Restcontroller
 - @PathVariable
 - @RequestMapping
 - @GetMapping
 - @PostMapping
 - @PutMapping
 - @DeleteMapping
 - @RequestBody
 - @ResponseBody
 - @ResponseStatus
 - @RequestParam
 - @RequestHeader


