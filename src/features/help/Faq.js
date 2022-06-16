import React from "react";

function Faq() {
	return (
		<div>
			<section>
				<h3 class="text-center mb-4 pb-2 text-primary fw-bold">FAQ</h3>
				<p class="text-center mb-5">
					Find the answers for the most frequently asked questions below
				</p>

				<div class="row">
					<div class="col-md-6 col-lg-4 mb-4">
						<h6 class="mb-3 text-primary">
							<i class="far fa-paper-plane text-primary pe-2"></i> A simple
							question?
						</h6>
						<p>
							<strong>
								<u>Absolutely!</u>
							</strong>{" "}
							We work with top payment companies which guarantees your safety
							and security. All billing information is stored on our payment
							processing partner.
						</p>
					</div>

					<div class="col-md-6 col-lg-4 mb-4">
						<h6 class="mb-3 text-primary">
							<i class="fas fa-pen-alt text-primary pe-2"></i> A question that
							is longer then the previous one?
						</h6>
						<p>
							<strong>
								<u>Yes, it is possible!</u>
							</strong>{" "}
							You can cancel your subscription anytime in your account. Once the
							subscription is cancelled, you will not be charged next month.
						</p>
					</div>

					<div class="col-md-6 col-lg-4 mb-4">
						<h6 class="mb-3 text-primary">
							<i class="fas fa-user text-primary pe-2"></i> A simple question?
						</h6>
						<p>
							Currently, we only offer monthly subscription. You can upgrade or
							cancel your monthly account at any time with no further
							obligation.
						</p>
					</div>

					<div class="col-md-6 col-lg-4 mb-4">
						<h6 class="mb-3 text-primary">
							<i class="fas fa-rocket text-primary pe-2"></i> A simple question?
						</h6>
						<p>
							Yes. Go to the billing section of your dashboard and update your
							payment information.
						</p>
					</div>

					<div class="col-md-6 col-lg-4 mb-4">
						<h6 class="mb-3 text-primary">
							<i class="fas fa-home text-primary pe-2"></i> A simple question?
						</h6>
						<p>
							<strong>
								<u>Unfortunately no</u>.
							</strong>{" "}
							We do not issue full or partial refunds for any reason.
						</p>
					</div>

					<div class="col-md-6 col-lg-4 mb-4">
						<h6 class="mb-3 text-primary">
							<i class="fas fa-book-open text-primary pe-2"></i> Another
							question that is longer than usual
						</h6>
						<p>
							Of course! We’re happy to offer a free plan to anyone who wants to
							try our service.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Faq;
