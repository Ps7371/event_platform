"use client";
import EventForm from "@/components/shared/EventForm"
import { useAuth } from "@clerk/nextjs";
const CreateEvent = () => {
    const { userId, isLoaded } = useAuth();


  return (
    <>
<section className="relative py-10 bg-[hsl(210,40%,98%)] bg-[url('/dotted-pattern.png')] bg-cover bg-center">
  <h3 className="text-center font-bold text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] text-gray-900">
    Create Event
  </h3>
</section>
      <div className="wrapper my-8">
        <EventForm userId={userId || ""} type="Create" />
      </div>
    </>
  )
}

export default CreateEvent