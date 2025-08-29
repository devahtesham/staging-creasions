import React from 'react';

import wireframe from '/public/kadobu/kadobu-sec03-wireframe.png';
import Image from 'next/image';



export default function Section3() {
    return (
        <section className="KaDoBu-03" style={{ background: '#080411', color: '#fff' }}>
            <div className="container" style={{ padding: '110px 0'}}>
                <div className="row mb-4 align-items-center">
                    <div className="col-md-6" >
                        <h6>Wireframing</h6>
                        <h3>From Concept to Approval</h3>
                    </div>
                    <div className="col-md-6">
                        <p>
                            Before bringing KaDoBu’s website to life, we designed wireframes tailored to the client’s requirements. After refining and getting approvals, these wireframes set the foundation for a seamless, user-friendly site. Check them out below!
                        </p>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-12">
                    <div className="wireframe-background" />
                </div>
            </div>
        </section>
    );
}
