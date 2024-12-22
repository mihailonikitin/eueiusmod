   const resolvers = {
       Query: {
           someQuery: (parent, args, context, info) => {
               // Resolver logic
           },
       },
       someField: {
           resolve: (source, args, context, info) => {
               // Resolver logic for someField
           },
           explicit: true,
       },
   };
   