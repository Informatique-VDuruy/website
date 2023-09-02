import React from 'react';
import './../../assets/css/components/home/events.css'

function Events() {
    // Sample event data
    const events = [
        {
            title: 'Tech Talk: Web Development',
            date: 'October 15, 2023',
            description: 'Join us for an in-depth discussion on web development technologies.',
        },
        {
            title: 'Workshop: React Basics',
            date: 'October 20, 2023',
            description: 'Learn the fundamentals of React in this hands-on workshop.',
        },
        // Add more event entries as needed
    ];

    return (
        <section className="events">
            <div className='events-content'>
                <h2>Upcoming Events</h2>
                {events.map((event, index) => (
                    <div className='event-box'>
                        <h3>{event.title}</h3>
                        <p>Date: {event.date}</p>
                        <p>{event.description}</p>
                    </div>
                ))}
            </div>
        </section>
        );
    }

export default Events;
    