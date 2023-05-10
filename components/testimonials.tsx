import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Tarifs transparents</h2>
            <p className="text-xl text-gray-400">3 forfaits, adaptés à différents usages</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <blockquote className="text-lg text-gray-400 grow">
                <h2 className="h2 mb-4">Basic Pack</h2>
                <ul className='list-disc ml-7'>
                  <li>Menu personnalisable</li>
                  <li>Commande sur tablette</li>
                  <li>Gestion des commandes en cuisine en temps réel</li>
                  <li>Suivi de l'évolution des commandes par le client</li>  
                  <li>Paiement en ligne (QRpay)</li>  
                </ul>
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">2,95€/jour</cite> <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">soit 89,99€/mois</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <blockquote className="text-lg text-gray-400 grow">
                <h2 className="h2 mb-4">Premium Pack</h2>
                <ul className='list-disc ml-7'>
                  <li>Récupération des données clients</li>
                  <li>Commande en ligne depuis Internet</li>
                  <li>Gestion de carte fidélité</li>  
                  <li>Export de menu en affiche</li>
                  <li>Accès à tous les thèmes pré-définis</li>
                  <li>Et toutes les fonctionnalités du Basic Pack</li>
                </ul>
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">3,60€/jour</cite> <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">soit 109,99€/mois</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <blockquote className="text-lg text-gray-400 grow">
                <h2 className="h2 mb-4t text-yellow-200">Pack Gold</h2>
                <ul className='list-disc ml-7'>
                  <li>Statistiques avancées et Recommandations personnalisées</li>
                  <li>Sauvegardes de plusieurs menu</li>
                  <li>Assistance en ligne et par téléphone</li>
                  <li>Appel client pour récupérer la commande</li> 
                  <li>Et toutes les fonctionnalités du Premium Pack</li>  
                </ul>
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">4,26€/jour</cite> <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">soit 129,99€/mois</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
